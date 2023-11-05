import React from 'react';

function StreamPosts() {
    const streams = Array.from({ length: 20 });
    return (
        <ul className="grid gap-[33px]">
            {streams.map(() => (
                <li>
                    <article>
                        <h3 className="text-gray font-semibold mb-1">Migrations Series: Canada</h3>
                        <p className="text-gray-600 mb-1">
                            I went to boarding school and left pretty early, so I had some experience with losing friends to...
                        </p>
                        <div className="flex gap-3 items-center text-xs">
                            <span>Lota Anidi</span>
                            <span className="block w-[4px] h-[4px] bg-gray rounded-full" />
                            <span>12 Dec 2022</span>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
}

export default StreamPosts;
