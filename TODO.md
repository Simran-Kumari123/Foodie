# TODO: Vercel Deployment Readiness

## Completed
- [x] Updated frontend/src/components/Reservation.jsx to use VITE_API_URL environment variable with fallback to localhost for development

## Remaining Steps for Vercel Deployment

### Backend Deployment
- [ ] Set environment variables in Vercel backend project:
  - FRONTEND_URL: Set to your deployed frontend URL (e.g., https://your-frontend.vercel.app)
  - MONGO_URI: Set to your MongoDB Atlas connection string (not localhost)
- [ ] Deploy backend to Vercel (push to GitHub and connect to Vercel)
- [ ] Note the deployed backend URL (e.g., https://your-backend.vercel.app)

### Frontend Deployment
- [ ] Set environment variable in Vercel frontend project:
  - VITE_API_URL: Set to your deployed backend URL (e.g., https://your-backend.vercel.app)
- [ ] Build frontend: Run `npm run build` in frontend directory
- [ ] Deploy frontend to Vercel (push to GitHub and connect to Vercel)

### Testing
- [ ] Test reservation form on deployed frontend to ensure API calls work
- [ ] Verify CORS is working (no CORS errors in browser console)
- [ ] Check database connections are working

## Notes
- Backend is configured as serverless function via Backend/vercel.json
- Frontend uses Vite build system
- Ensure MongoDB is accessible from Vercel (use MongoDB Atlas)
- Update CORS origin in backend if frontend URL changes
