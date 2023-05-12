"use server";
export async function generateMetadata ({ params }) {
    const response = await fetch(`/api/user/${params?.id}/posts`);
    const data = await response.json();
    
    return {
        keywords:[data.creator.username],
        title: data.creator.username,
        openGraph:{
            type: 'profile',
            title: data.creator.username,
            description: `Welcome to ${data.creator.username} personalized profile page. Explore ${data.creator.username} exceptional prompts and be inspired by the power of their imagination`,
            images: [{
                url: data.creator.image,
            }],
            url: `https://prompt-orpin.vercel.app/profile/${data.creator._id.toString()}?name=${data.creator.username}`,
            site_name: 'prompt',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.creator.username,
            description: `Welcome to ${data.creator.username} personalized profile page. Explore ${data.creator.username} exceptional prompts and be inspired by the power of their imagination`,
            creator: `@${data.creator.username}`,
            creatorId: data.creator._id.toString(),
            images: [`${data.creator.image}`],
          },
          viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
          },
          verification: {
            google: 'google',
            yandex: 'yandex',
            yahoo: 'yahoo',
            other: {
              me: ['my-email', 'my-link'],
            },
          },
    }
}
