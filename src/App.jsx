import avatar from './assets/avatar.png';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatar: avatar,
      name: 'Gustavo Pettine',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'I just added another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. The name of the project is Ignite Feed 🚀' },
    ],
    publishedAt: new Date('2024-05-21 05:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
