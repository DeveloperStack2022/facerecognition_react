import { IAddUser_db, IUser_db_Data } from "./interfaces/iUser_db";
class User_db implements IAddUser_db {
  private readonly _cedula: string;
  private readonly _nombres: string;
  private readonly _condicion_cedulado?: "ciudadano" | "ciudadana";
  private readonly _fecha_nacimiento?: Date;
  private readonly _lugar_ins_nacimiento?: string;
  private readonly _anio_ins_nacimiento?: string;
  private readonly _nacionalidad?: string;
  private readonly _codigo_dactilar?: string;
  private readonly _estado_civil?: string;
  private readonly _conyuge?: string;
  private readonly _instruccion?: string;
  private readonly _profession?: string;
  private readonly _nombre_padre?: string;
  private readonly _nacionalidad_padre?: string;
  private readonly _nombre_madre?: string;
  private readonly _nacionalidad_madre?: string;
  private readonly _domicilio?: string;
  private readonly _calles_domicilio?: string;
  private readonly _doble_nacionalidad?: string;

  constructor(params: IUser_db_Data) {
    this._cedula = params.cedula;
    this._nombres = params.nombres;
    this._condicion_cedulado = params.condicion_cedulado;
    this._fecha_nacimiento = params.fecha_nacimiento;
    this._lugar_ins_nacimiento = params.lugar_ins_nacimiento;
    this._anio_ins_nacimiento = params.anio_ins_nacimiento;
    this._nacionalidad = params.nacionalidad;
    this._codigo_dactilar = params.codigo_dactilar;
    this._estado_civil = params.estado_civil;
    this._conyuge = params.conyuge;
    this._instruccion = params.instruccion;
    this._profession = params.profession;
    this._nombre_padre = params.nombre_padre;
    this._nacionalidad_padre = params.nacionalidad_padre;
    this._nombre_madre = params.nombre_madre;
    this._nacionalidad_madre = params.nacionalidad_madre;
    this._domicilio = params.domicilio;
    this._calles_domicilio = params.calles_domicilio;
    this._doble_nacionalidad = params.doble_nacionalidad;
  }

  get nombres(): string {
    return this._nombres;
  }
  get cedula(): string {
    return this._cedula;
  }
  get anio_ins_nacimiento(): string {
    return this._anio_ins_nacimiento;
  }
  get calles_domicilio(): string {
    return this._calles_domicilio;
  }

  get codigo_dactilar(): string {
    return this._codigo_dactilar;
  }
  get condicion_cedulado(): "ciudadano" | "ciudadana" {
    return this._condicion_cedulado;
  }
}

export default User_db;
