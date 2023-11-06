import { WEBSOCKET_URL } from '@config/constants';
import tokenService from '@services/token.service';
import { useState, useEffect } from 'react';
import StreamPostCard from './StreamPostCard';

function StreamPosts() {
    const [streamPosts, setStreamPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const token = tokenService.getToken();
        if (!token) return;
        const socket = new WebSocket(`${WEBSOCKET_URL}?token=${token}`);

        socket.onopen = () => {
            // console.log('WebSocket connection established.');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setStreamPosts((prev) => [message, ...prev.slice(0, 4)]);
            // console.log('Received message:', message);
        };

        socket.onclose = () => {
            // console.error('Connection closed');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <>
            <ul className="grid gap-[33px]">
                {streamPosts.map((post: IPost) => (
                    <li key={'live-posts-' + post.id}>
                        <StreamPostCard post={post} />
                    </li>
                ))}
            </ul>
            <>{streamPosts?.length === 0 && <p className="text-sm text-grey-600">Live posts will show here when available</p>}</>
        </>
    );
}

export default StreamPosts;
