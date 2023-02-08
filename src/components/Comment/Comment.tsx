import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({content, onDeleteComment}: CommentProps ) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/guidrop17.png" 
                alt="ProfileComment" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Araújo</strong>
                            <time title="11 de janeiro às 01:43h" dateTime="2023-01-11 01:43:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}