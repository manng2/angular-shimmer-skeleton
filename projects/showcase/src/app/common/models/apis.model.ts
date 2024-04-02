import { DataTypeEnum } from "./data-type.enum";

export interface ApiModel {
  name: string,
  description: string,
  types: ReadonlyArray<DataTypeEnum>
}
