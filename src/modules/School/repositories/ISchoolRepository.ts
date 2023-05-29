import { AreaDeFormacao, Categoria, Curso, Escola, Inscricao, Municipio, Provincia } from '@prisma/client'
import { SchoolDTO } from '../dtos'

export interface ISchoolRepository {
  findById(id: string): Promise<Escola>
  findByName(nome: string): Promise<Escola>
  getTrainingAreas(schoolId: string): Promise<AreaDeFormacao[]>
  getCourses(schoolId: string): Promise<Curso[]>
  getEnrollments(schoolId: string): Promise<Inscricao[]>
  filterSchoolByName(nome: string, take?: number, skip?: number): Promise<Escola[]>
  filterSchoolByProvince(provinceId: string): Promise<Escola[]>
  filterSchoolByCounty(countyId: string): Promise<Escola[]>
  filterSchoolByCategory(categoryId: string): Promise<Escola[]>
  findCategoryById(categoriaId: string): Promise<Categoria>
  findProvinceById(provinceId: string): Promise<Provincia>
  findCountyById(countyId: string): Promise<Municipio>
  save(data: SchoolDTO): Promise<Escola>
  delete(id: string): Promise<Escola>
  update(data: SchoolDTO): Promise<Escola>
  getSchools(): Promise<Escola[]>
}