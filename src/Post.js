// src/Posts.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function fetchPosts() {
	return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => 
    res.json()
    );
}

function Posts() {
	// 기존
    // const { data, isLoading, isError } = useQuery(['posts'], fetchPosts);

    // Uncaught Error: Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions.
    // React Query v5에서는 모든 쿼리 관련 함수(useQuery, useMutation, useInfiniteQuery 등)가 객체 형태로 인자를 전달해야 합니다
    const { data, isLoading, isError } = useQuery({
        queryKey: ['posts'], // 쿼리 키
        queryFn: fetchPosts, // 데이터 패칭 함수
        staleTime: 5000,     // 캐싱된 데이터가 신선한 상태로 유지되는 시간 (ms)
    });

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error fetching data.</p>;
    
    return (
    	<ul>
        	{data.map((post) => (
            	<li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default Posts;