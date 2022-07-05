export type RenderReport = {
  id: string
  comment: string
  createdAt: number
  driver: {
    firstName: string
    lastName: string
    role: string
    createdAt: number
    email: string
    id: string
    car: {
      make: string
      model: string
      year: number
      color: string
      photo: string
    }
  }
}