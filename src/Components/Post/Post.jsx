import style from './post.scss'
export default function Post(props) {
    return (
        <div className="post">
            <h2 className="post__title">
                {props.item.title}
            </h2>
            <p className="post__body">
                {props.item.body}
            </p>
            <div className='closeBtn' onClick={() => props.delPost(props.item.id)}>✖</div>
        </div>
    )
}
