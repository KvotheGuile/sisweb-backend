import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Company } from './company';
import { Tag } from './tag';


@Table({
    tableName: 'CompanyTags'
})

export class CompanyTag extends Model<CompanyTag> {
  @ForeignKey(() => Company)
  @Column
  companyId!: number;

  @ForeignKey(() => Tag)
  @Column
  tagId!: number;
}