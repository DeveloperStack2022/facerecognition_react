export interface IAddUser_db {
  nombres: string;
  cedula: string;
  condicion_cedulado?: "ciudadano" | "ciudadana";
  fecha_nacimiento?: Date;
  lugar_ins_nacimiento?: string;
  anio_ins_nacimiento?: string;
  nacionalidad?: string;
  codigo_dactilar?: string;
  estado_civil?: string;
  conyuge?: string;
  instruccion?: string;
  profession?: string;
  nombre_padre?: string;
  nacionalidad_padre?: string;
  nombre_madre?: string;
  nacionalidad_madre?: string;
  domicilio?: string;
  calles_domicilio?: string;
  doble_nacionalidad?: string;
}

export interface IUser_db_Data {
  nombres: string;
  cedula: string;
  condicion_cedulado?: "ciudadano" | "ciudadana";
  fecha_nacimiento?: Date;
  lugar_ins_nacimiento?: string;
  anio_ins_nacimiento?: string;
  nacionalidad?: string;
  codigo_dactilar?: string;
  estado_civil?: string;
  conyuge?: string;
  instruccion?: string;
  profession?: string;
  nombre_padre?: string;
  nacionalidad_padre?: string;
  nombre_madre?: string;
  nacionalidad_madre?: string;
  domicilio?: string;
  calles_domicilio?: string;
  doble_nacionalidad?: string;
}
