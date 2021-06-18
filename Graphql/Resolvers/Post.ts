import postSchema from '../../Model/postSchema';

export const postQuery = {

    Query: {
        async posts() {
            try {
                const posts = await postSchema.find();
                return posts


            } catch (error) {
                console.log(error)
            }

        }


    }

}