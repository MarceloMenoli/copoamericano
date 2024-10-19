import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Star from '../../../../components/atoms/Stars';
import {Drink} from '../../../../intrefaces/drink';
import {launchImageLibrary, Asset} from 'react-native-image-picker';

interface AddDrinkModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  name: z.string().min(2, 'O nome deve ter no mínimo 2 caracteres'),
  description: z.string().min(5, 'A descrição deve ter no mínimo 5 caracteres'),
  ingredients: z
    .string()
    .min(5, 'Os ingredientes devem ter no mínimo 5 caracteres'),
  is_alcoholic: z.boolean(),
  rating: z
    .number()
    .min(1, 'Avaliação mínima é 1')
    .max(5, 'Avaliação máxima é 5'),
  image: z.any().optional(),
});

const AddDrinkModal: React.FC<AddDrinkModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<Drink>({
    resolver: zodResolver(schema),
  });

  const [selectedImage, setSelectedImage] = useState<Asset | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({length: 5}).map((_, index) => (
      <Star
        key={index}
        filled={index < rating}
        onPress={() => setValue('rating', index + 1)}
      />
    ));
  };

  const onSubmitForm = (data: Drink) => {
    if (!selectedImage) {
      Alert.alert('Por favor, selecione uma imagem');
      return;
    }

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('ingredients', data.ingredients);
    formData.append('is_alcoholic', data.is_alcoholic.toString());
    formData.append('rating', data.rating.toString());

    formData.append('image', {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: selectedImage.fileName || 'image.jpg',
    });

    onSubmit(formData);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Adicionar Nova Bebida</Text>

        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Nome da bebida"
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Descrição"
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}

        <Controller
          name="ingredients"
          control={control}
          defaultValue=""
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Ingredientes"
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.ingredients && (
          <Text style={styles.error}>{errors.ingredients.message}</Text>
        )}

        <View style={styles.checkboxContainer}>
          <Controller
            name="is_alcoholic"
            control={control}
            defaultValue={false}
            render={({field: {onChange, value}}) => (
              <View>
                <Text>É alcoólica?</Text>
                <Button
                  title={value ? 'Sim' : 'Não'}
                  onPress={() => onChange(!value)}
                />
              </View>
            )}
          />
        </View>

        <Text style={styles.label}>Avaliação:</Text>
        <View style={styles.starsContainer}>
          <Controller
            name="rating"
            control={control}
            defaultValue={0}
            render={({field: {value}}) => (
              <View style={styles.starsContainer}>{renderStars(value)}</View>
            )}
          />
        </View>
        {errors.rating && (
          <Text style={styles.error}>{errors.rating.message}</Text>
        )}

        {/* Image Picker */}
        <TouchableOpacity
          style={styles.imagePicker}
          onPress={() => {
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
              } else if (response.errorCode) {
                console.log('Erro:', response.errorMessage);
              } else if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setSelectedImage(asset);
              }
            });
          }}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage.uri}}
              style={styles.imagePreview}
            />
          ) : (
            <Text style={styles.imagePickerText}>Selecionar Imagem</Text>
          )}
        </TouchableOpacity>
        {errors.image && (
          <Text style={styles.error}>{errors.image.message}</Text>
        )}

        <Button title="Adicionar Bebida" onPress={handleSubmit(onSubmitForm)} />

        <Button title="Fechar" onPress={onClose} color="red" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  imagePicker: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 20,
  },
  imagePickerText: {
    color: '#666',
  },
  imagePreview: {
    width: 200,
    height: 200,
  },
});

export default AddDrinkModal;
