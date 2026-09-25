const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const adminRoutes = require('./src/routes/admin.routes');
const categoryRoutes = require('./src/routes/category.routes');
const contentRoutes = require('./src/routes/content.routes');
const submissionRoutes = require('./src/routes/submission.routes');
const ratingRoutes = require('./src/routes/rating.routes');
const bookmarkRoutes = require('./src/routes/bookmark.routes');
const eventRoutes = require('./src/routes/event.routes');
const feedbackRoutes = require('./src/routes/feedback.routes');
const chatbotRoutes = require('./src/routes/chatbot.routes');
const faqRoutes = require('./src/routes/faq.routes');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(
  '/api',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 300, standardHeaders: true, legacyHeaders: false })
);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/faqs', faqRoutes);

app.use((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = app;
