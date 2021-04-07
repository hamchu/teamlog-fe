import { Avatar, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const usersMock = [
    {
        id: 'ondal1997',
        name: '신동헌',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/AAA.png',
    },
    {
        id: 'hamchu',
        name: '이희수',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/BBB.png',
    },
    {
        id: 'Hyeondoonge',
        name: '신현정',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/CCC.png',
    },
    {
        id: 'jduckling1024',
        name: '윤진',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/DDD.png',
    },
    {
        id: 'marksamgon111',
        name: '마크 사무엘 곤잘레스',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/EEE.png',
    },
];

const fetchAndJsonUsers = async () => {
    return {
        users: usersMock,
        totalCount: usersMock.length,
    };
}

const UserSelect = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let result;
            try {
                result = await fetchAndJsonUsers();
            } catch (error) {
                setIsLoaded(true);
                setError(error);
                return;
            }
            setIsLoaded(true);
            setUsers(result.users);
        })();
    }, []);

    if (error) {
        return `Error: ${error.message}`;
    }

    if (!isLoaded) {
        return 'Loading...';
    }

    return (
        <>
            {users.map((user) => (
                <Grid container spacing={1} alignItems='center'>
                    <Grid item>
                        <Avatar alt={user.name} src={user.profileImgPath} />
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>{user.name}</Typography>
                    </Grid>
                </Grid>
            ))}
        </>
    );
};

export default UserSelect;
