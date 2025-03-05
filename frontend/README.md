# MERN Stack Task Submission

## Project Overview
This project demonstrates the implementation of pagination, MongoDB query optimization, and React memoization techniques in a MERN (MongoDB, Express.js, React, Node.js) stack application. The application fetches and displays a list of items with infinite scrolling, optimized MongoDB queries, and React performance improvements.

---

## Features
1. **Pagination/Infinite Scrolling**:
   - The backend supports pagination using `skip` and `limit`.
   - The frontend implements infinite scrolling using the `react-infinite-scroll-component` library.

2. **MongoDB Query Optimization**:
   - Indexing is applied to the `name` field in the `Item` model to optimize queries.

3. **React Memoization**:
   - The `useMemo` hook is used to memoize the rendered items, preventing unnecessary re-renders.

4. **Error Handling**:
   - Basic error handling is implemented in both the backend and frontend.

---

5. ## Technologies Used
- Frontend: React.js, Axios, React Infinite Scroll Component
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Tools: VS Code



