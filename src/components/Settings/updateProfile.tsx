import prisma from "../../app/lib/prisma";



const updateHandler = () => {
    async function updateUser(email: string, name: string) {
        try {
            const updatedUser = await prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    name: name,
                },
            });
            return updatedUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    return (<div>

    </div>);
}

export default updateHandler;