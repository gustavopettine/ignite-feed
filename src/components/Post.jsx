import avatar from '../assets/avatar.png';

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={avatar} />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Pettine</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="May 1st at 00:30h" dateTime="2024-05-01 00:30:00">Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>

                <p>
                    I just added another project to my portfolio. 
                    It's a project I did at NLW Return, a Rocketseat event. 
                    The name of the project is Ignite Feed 🚀
                </p>

                <p><a href="#">#newproject #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                    placeholder="Leave a comment"
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>
        </article>
    );
}
