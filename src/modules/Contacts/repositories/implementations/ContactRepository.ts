import { Contato } from "@prisma/client";
import { IContactDTO } from "../../dtos/ContactDTO";
import { IContactRepository } from "../IContactRepository";
import { prisma } from "../../../../prisma/client";

class ContactRepository implements IContactRepository {
    async create({ numeroTelefone, email }: IContactDTO): Promise<Contato> {
        const contact = await prisma.contato.create({
            data: {
                numeroTelefone,
                email,
            }
        });

        return contact;
    }

    async findById(id: string): Promise<Contato> {
        const contact = await prisma.contato.findFirst({
            where: {
                id
            }
        });

        return contact;
    }

    async findByPhoneNumber(phoneNumber: string): Promise<Contato> {
        const contact = await prisma.contato.findFirst({
            where: {
                numeroTelefone: phoneNumber
            }
        });

        return contact;
    }

    async findByEmail(email: string): Promise<Contato> {
        const contact = await prisma.contato.findUnique({
            where: {
                email
            }
        });

        return contact;
    }

    async isContactAlreadyLindedToSomeone(contactId: string): Promise<boolean> {
        const official = await prisma.funcionario.findFirst({
          where: {
            contatoId: contactId,
          }
        })
    
        const candidate = await prisma.candidato.findFirst({
          where: {
            contatoId: contactId
          }
        })
    
        const kinship = await prisma.parentesco.findFirst({
            where: {
              contatoId: contactId
            }
        })
    
        if(official || candidate || kinship) {
          return true;
        }
    
        return false;
      }

    async update({ id, numeroTelefone, email }: IContactDTO): Promise<Contato> {
        const contact = await prisma.contato.update({
            data: {
                numeroTelefone,
                email
            },
            where: {
                id
            }
        });

        return contact;
    }

    async delete(id: string): Promise<Contato> {
        const contact = await prisma.contato.delete({
            where: {
                id
            }
        });

        return contact;
    }

    async list(): Promise<Contato[]> {
        return await prisma.contato.findMany({
            include: {
                Candidato: true,
                Parentesco: {
                    include: {
                        Candidato: true
                    }
                }
            }
        })
    }
}

export { ContactRepository };