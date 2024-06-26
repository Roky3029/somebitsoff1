import Title from '@/components/Title'
import { getPostContent, getPostMetadata } from '@/data/getPostData'
import Markdown from 'markdown-to-jsx'
import Data from './components/Data'

export const generateStaticParams = async () => {
	const posts = getPostMetadata()

	return posts.map(post => ({
		slug: post.slug
	}))
}

const PostPage = (props: any) => {
	const slug = props.params.slug
	const post = getPostContent(slug)

	return (
		<div className='flex items-center justify-center flex-col'>
			<div className='px-3'>
				<Title text={post.data.title} small uppercase />
			</div>

			<Data
				author={post.data.author}
				introduction={post.data.introduction}
				date={post.data.date}
			/>

			<article className='prose lg:prose-xl px-5'>
				<Markdown>{String.raw`${post.content}`}</Markdown>
			</article>
		</div>
	)
}

export default PostPage
