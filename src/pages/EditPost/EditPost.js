import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from '../../components/Editor/Editor'
import Header from "../../components/Header/Header";

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('https://mindfulechoesserver.onrender.com/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                });
            });
    }, []);

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch('https://mindfulechoesserver.onrender.com/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <div className='header-main'>
            <Header />
            <form className='createpost'
                onSubmit={updatePost}
            >
                <input type="title"
                    placeholder={'Title'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input type="summary"
                    placeholder={'Summary'}
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                />
                <input type="file"
                    onChange={e => setFiles(e.target.files)}
                />
                <Editor value={content} onChange={setContent} />

                <button style={{ marginTop: '5px' }}>Update post</button>
            </form>
        </div>

    );
}