import { Router } from 'express'
import { DeliveriesController } from '@/controllers/deliveries-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)
deliveriesRoutes.post('/', ensureAuthenticated, deliveriesController.create)

export { deliveriesRoutes }
