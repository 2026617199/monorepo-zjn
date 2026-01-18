import Router from '@koa/router'
import {
  checkInteractions,
  getInteractionById,
  analyzeInteractionsByNames,
} from '../controllers/interactionController.js'

const router = new Router()

// 相互作用相关路由
router.post('/interactions/check', checkInteractions)
router.get('/interactions/:id', getInteractionById)
router.post('/interactions/analyze-by-names', analyzeInteractionsByNames)

export default router