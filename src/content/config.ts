import { z, defineCollection } from 'astro:content'

const cursosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    coordinador: z.string().default('Profesor 1'),
    descripcion: z.string()
  })
})

export const collections = {
  cursos: cursosCollection
}

// Los tipos en ZOD https://zod.dev/