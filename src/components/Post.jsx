import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "LLLL do 'at' KK:mm aaaa");
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true});

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }
                })}
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

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}
