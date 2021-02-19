import UsersService from "#root/adapters/UsersService"

const deleteUserSession = async(obj, { sessionId }, context) => {
    const userSession = await UsersService.deleteUserSession({ sessionId });
    
    context.res.clearCookie("userSessionId");

    return true;
}

export default deleteUserSession;