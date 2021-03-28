import express from 'express'

const router = express.Router()

const nocache = (req: any, res: any, next: any) => {
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
	res.header('Expires', '-1')
	res.header('Pragma', 'no-cache')
	next()
}

router.use('/', nocache)

export default router
