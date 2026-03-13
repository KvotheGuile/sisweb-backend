import { Table, Column, Model, ForeignKey, HasOne } from 'sequelize-typescript';
import { Company } from './company';
import { Tag } from './tag';


@Table({
    tableName: 'CompanyTags'
})

export class CompanyTag extends Model<CompanyTag> {
  @ForeignKey(() => Company)
  @Column
  companyId!: number;

  @HasOne(() => Company, { foreignKey: "companyId" })
  declare company?: Company | null;

  @ForeignKey(() => Tag)
  @Column
  tagId!: number;

  @HasOne(() => Tag, { foreignKey: "id" })
  declare tag?: Company | null;
}
/*
Company.belongsToMany(Tag, { through: CompanyTag, foreignKey: 'companyId' });
Tag.belongsToMany(Company, { through: CompanyTag, foreignKey: 'tagId' });//*/