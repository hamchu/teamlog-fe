import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography } from "@material-ui/core"
import { Delete, Edit, Error, HourglassFull } from "@material-ui/icons"
import { AvatarGroup } from "@material-ui/lab";
import { useState } from "react";

const TaskContainer = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography variant='h3'>태스크 목록</Typography>
                </Grid>

                <Grid item>
                    <Button variant='outlined' color='primary'>태스크 생성하기</Button>
                </Grid>

                <Grid item container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='시작 전' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>1</Typography>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button onClick={() => { setOpen(true); }}>
                                <ListItemText primary='설계 발표 자료 만들기' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='진행 중' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>2</Typography>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button>
                                <ListItemText primary='태스크 관리 UI 그리기' />
                                <ListItemIcon>
                                    <HourglassFull color='primary' />
                                </ListItemIcon>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary='팀 관리 UI 그리기' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='완료' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>3</Typography>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button>
                                <ListItemText primary='시스템 개요 작성' />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary='팀 관리 객체 지향 설계 작성' />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary='유저 관리 객체 지향 설계 작성' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip icon={<Error />} label='미완료' color='secondary' />
                            </Grid>

                            <Grid item>
                                <Typography color='secondary'>1</Typography>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button>
                                <ListItemText primary='회의 장소 찾기' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => {setOpen(false); }}>
                <DialogTitle>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Chip label='시작 전' color='primary' size='small' />
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>
                                설계 발표 자료 만들기
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item>
                            <Typography>수행자</Typography>
                        </Grid>

                        <Grid item>
                            <Tooltip title='윤진, 신현정, 이희수, 신동헌'>
                                <AvatarGroup max={3}>
                                    <Avatar alt='윤진' src='http://codersit.co.kr/static/img/AAA.png' />
                                    <Avatar alt='신현정' src='http://codersit.co.kr/static/img/CCC.png' />
                                    <Avatar alt='이희수' src='http://codersit.co.kr/static/img/DDD.png' />
                                    <Avatar alt='신동헌' src='http://codersit.co.kr/static/img/BBB.png' />
                                </AvatarGroup>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Divider />
                </DialogContent>
                <DialogContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item>
                            <Typography>마감일</Typography>
                        </Grid>

                        <Grid item>
                            <Typography>2021년 5월 7일</Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                </DialogContent>
                <DialogActions>
                    <IconButton>
                        <Edit />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TaskContainer;