import UsersService from "#root/adapters/UsersService";

const usersResolver = async () => {
    return await UsersService.fetchAllUsers();
};

export default usersResolver;