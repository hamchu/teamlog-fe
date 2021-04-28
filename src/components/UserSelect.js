import { Avatar, Box, Button, Checkbox, Chip, Container, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, styled, TextField, Typography, withStyles } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank, Search } from "@material-ui/icons";
import { useEffect, useState } from "react";

const usersMock = [
    {
        id: 'ondal1997',
        name: '신동헌',
        introduction: '',
        profileImgURL: 'http://codersit.co.kr/static/img/AAA.png',
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
    {
        id: 'a',
        name: '엑스트라',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/AAA.png',
    },
    {
        id: 'b',
        name: '바보',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/BBB.png',
    },
    {
        id: 'c',
        name: '멍멍이',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/CCC.png',
    },
    {
        id: 'd',
        name: '똥개',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/DDD.png',
    },
    {
        id: 'e',
        name: '사무스 아리가또고자이마스',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/EEE.png',
    },
    {
        id: 'f',
        name: '톨톨톨톨톨톨톨톨톨톨',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/CCC.png',
    },
    {
        id: 'g',
        name: '퍄퍄퍄퍄퍄퍄퍄퍄퍄',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/DDD.png',
    },
    {
        id: 'h',
        name: '사ㅏ사사ㅏ사사사사',
        introduction: '',
        profileImgPath: 'http://codersit.co.kr/static/img/EEE.png',
    },
];

const fetchAndJsonUsers = async () => {
    return {
        users: usersMock,
        totalCount: usersMock.length,
    };
};

const StyledList = withStyles({
    root: {
        height: 256,
        overflow: 'auto',
    },
})(List);

const UserSelect = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [searchString, setSearchString] = useState('');

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

    const toggleSelectedUserId = (userId) => {
        if (selectedUserIds.includes(userId)) {
            const temp = selectedUserIds.slice();
            temp.splice(selectedUserIds.indexOf(userId), 1);
            setSelectedUserIds(temp);
        }
        else {
            setSelectedUserIds([...selectedUserIds, userId]);
        }
    };

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
            >
                <Typography>
                    {`${selectedUserIds.length}명 선택됨`}
                </Typography>
            </Box>

            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
                gridGap='4px'

                height='128px'
                overflow='auto'
                bgcolor='#F8F8F8'
            >
                {selectedUserIds.length === 0 && (
                    <Typography color='primary'>
                        {'-'}
                    </Typography>
                )}
                {selectedUserIds.map((selectedUserId) => {
                    const user = users.find((user) => user.id === selectedUserId);
                    return (
                        <Chip   
                            key={user.id}
                            label={user.name}
                            onDelete={() => { toggleSelectedUserId(user.id); }}
                            color='primary'
                        />
                    );
                })}
            </Box>

            <TextField
                fullWidth
                type='search'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                placeholder='이름으로 검색'
                value={searchString}
                onChange={(event) => { setSearchString(event.target.value); }}
            />

            <StyledList dense>
                {users.filter((user) => user.name.includes(searchString)).map((user) => (
                    <ListItem key={user.id} button onClick={() => { toggleSelectedUserId(user.id); }}>
                        <ListItemAvatar>
                            <Avatar alt={user.name} src={user.profileImgPath} />
                        </ListItemAvatar>
                        <ListItemText primary={user.name} />
                        {
                            selectedUserIds.includes(user.id) ? (
                                <CheckBox color='primary' />
                            ) : (
                                <CheckBoxOutlineBlank color='primary' />
                            )
                        }
                    </ListItem>
                ))}
            </StyledList>
            
            <Box
                display='flex'
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                gridGap='8px'

                padding='8px'
                bgcolor='#F8F8F8'
            >
                <Button variant='contained'>
                    취소
                </Button>
                <Button variant='contained' color='primary' disabled={selectedUserIds.length === 0}>
                    완료
                </Button>
            </Box>
        </>
    );
};

export default UserSelect;
