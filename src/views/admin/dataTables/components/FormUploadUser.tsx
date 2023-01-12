import { useRef, useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Flex,
  useColorModeValue,
  Icon,
  Text,
  Button,
  Input,
  Img,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import { IUser_db_Data } from "domain/Entities/interfaces/iUser_db";
import di from "di";
import Swal from "sweetalert2";
//Custom components
import InputField from "views/admin/dataTables/components/InputField";
export default function FormUploadUser(props: { [x: string]: any }) {
  let messageError = "Porfavor sube una foto del usuario que estas agregando";
  const { ...rest } = props;
  const history = useHistory();
  //Refs
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => hiddenInput.current?.click();
  //States
  const [picture, setPicture] = useState<any>(null);
  const [imgData, setImgData] = useState<any>(null);
  const [UploadImage, setUploadImage] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser_db_Data>({ mode: "onBlur" });
  // Chakra color mode
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  //
  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      setUploadImage(true);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  //
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!UploadImage) {
      return Swal.fire({
        title: "Error",
        showConfirmButton: true,
        text: messageError,
        confirmButtonText: "OK",
        confirmButtonColor: "#422AFB",
        icon: "error",
      });
    }
    handleSubmit(async (data) => {
      console.log("handle Submit");
      formData.append("image", picture);
      // console.log(data);
      let response = await di.user.add(formData);

      let status = response?.status;
      if (status >= 400 && status < 500) {
        let data_ = await response?.json();
        console.log(data_);
        return Swal.fire({
          title: "Error",
          showConfirmButton: true,
          text: `${data_?.detail}`,
          confirmButtonText: "OK",
          confirmButtonColor: "#422AFB",
          icon: "error",
        });
      }
      if (status >= 200 && status < 300) {
        Swal.fire({
          title: "Correcto",
          showConfirmButton: true,
          text: `Usuario creado exitosamente`,
          confirmButtonText: "OK",
          confirmButtonColor: "#422AFB",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/");
          }
        });
      }
    })(e);
  };

  return (
    <form onSubmit={submitForm}>
      <Grid
        gridTemplateColumns={"300px 1fr 1fr"}
        rowGap="1"
        columnGap={"2"}
        templateAreas={`
      "Image nombres cedula"
      "Image condicion_cedulado fecha_naciomiento"
      "Image lugar_nacimiento anio_ins_nacimiento"
      "Image nacionalidad codigo_dactilar"
      "estado_civil conyugue instruccion"
      "profesion nombre_padre nacionalidad_padre"
      "nombre_madre nacionalidad_madre domicilio"
      "calles_domicilio doble_nacionalidad button"
      `}
      >
        <Flex
          gridArea={"Image"}
          flexDirection="column"
          bg={bg}
          alignItems={"center"}
          justifyContent="center"
          border="1px dashed"
          borderColor={borderColor}
          borderRadius="16px"
          _hover={{ cursor: "pointer" }}
          onClick={handleClick}
          maxHeight={{ base: "256px", xl: "256px" }}
          overflow={"hidden"}
        >
          {!imgData ? (
            <>
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="md" fontWeight="700" color={brandColor}>
                  Upload File
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PNG, JPG and JPEG files are allowed
              </Text>
            </>
          ) : (
            <Img src={imgData} width="100%" height={"100%"} />
          )}
        </Flex>
        <Input
          type="file"
          hidden
          accept="image/png,image/jpeg,image/jpg"
          ref={(el) => {
            hiddenInput.current = el;
          }}
          onChange={onChangePicture}
        />
        <InputField
          {...register("nombres", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          label="Nombres"
          type="string"
          errors={errors.nombres}
          placeholder={"Jhon Doe"}
          size={"sm"}
          gridArea="nombres"
        />

        <InputField
          gridArea="cedula"
          {...register("cedula", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          label="Numero de cedula"
          type="string"
          errors={errors.cedula}
          placeholder={"1234567890"}
          size={"sm"}
        />
        <InputField
          gridArea="fecha_naciomiento"
          {...register("fecha_nacimiento", {})}
          label="Fecha nacimiento"
          type="string"
          errors={errors.fecha_nacimiento}
          placeholder={""}
          size={"sm"}
        />

        <InputField
          gridArea="condicion_cedulado"
          {...register("condicion_cedulado", {})}
          label="Condicion Cedulado"
          type="string"
          errors={errors.condicion_cedulado}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="lugar_nacimiento"
          {...register("lugar_ins_nacimiento", {})}
          label="Lugar ins nacimiento"
          type="string"
          errors={errors.lugar_ins_nacimiento}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="anio_ins_nacimiento"
          {...register("anio_ins_nacimiento", {})}
          label="Año ins nacimiento"
          type="string"
          errors={errors.anio_ins_nacimiento}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="nacionalidad"
          {...register("nacionalidad", {})}
          label="Nacionalidad"
          type="string"
          errors={errors.nacionalidad}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="codigo_dactilar"
          {...register("codigo_dactilar", {})}
          label="Codigo dactilar"
          type="string"
          errors={errors.codigo_dactilar}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="estado_civil"
          {...register("estado_civil", {})}
          label="Estado civil"
          type="string"
          errors={errors.estado_civil}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="conyugue"
          {...register("conyuge", {})}
          label="Conyuge"
          type="string"
          errors={errors.conyuge}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="instruccion"
          {...register("instruccion", {})}
          label="Instruccion"
          type="string"
          errors={errors.instruccion}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="profesion"
          {...register("profession", {})}
          label="Profesion"
          type="string"
          errors={errors.profession}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="nombre_padre"
          {...register("nombre_padre", {})}
          label="Nombre padre"
          type="string"
          errors={errors.nombre_padre}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="nacionalidad_padre"
          {...register("nacionalidad_padre", {})}
          label="Nacionalidad padre"
          type="string"
          errors={errors.nacionalidad_padre}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="nombre_madre"
          {...register("nombre_madre", {})}
          label="Nombre madre"
          type="string"
          errors={errors.nombre_madre}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="nacionalidad_madre"
          {...register("nacionalidad_madre", {})}
          label="Nacionalidad madre"
          type="string"
          errors={errors.nacionalidad_madre}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="domicilio"
          {...register("domicilio", {})}
          label="Domicilio"
          type="string"
          errors={errors.domicilio}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="calles_domicilio"
          {...register("calles_domicilio", {})}
          label="Calles domicilio"
          type="string"
          errors={errors.calles_domicilio}
          placeholder={""}
          size={"sm"}
        />
        <InputField
          gridArea="doble_nacionalidad"
          {...register("doble_nacionalidad", {})}
          label="Doble nacionalidad"
          type="string"
          errors={errors.doble_nacionalidad}
          placeholder={""}
          size={"sm"}
        />
        <Flex gridArea={"button"} justifyContent="end" alignItems={"end"}>
          <Button
            type="submit"
            variant={"brand"}
            fontWeight="500"
            minW="140px"
            w="140px"
          >
            Submit
          </Button>
        </Flex>
      </Grid>
    </form>
  );
}
