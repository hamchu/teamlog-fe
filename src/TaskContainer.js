import { Button, Chip, Divider, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core"
import { Error } from "@material-ui/icons"

const TaskContainer = () => {
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
                    <Grid item sm={12} md={3}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='시작 전' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>1</Typography>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button>
                                <ListItemText primary='설계 발표 자료 만들기' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>

                    <Grid item sm={12} md={3}>
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
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary='팀 관리 UI 그리기' />
                            </ListItem>
                            <Divider />
                        </List>
                    </Grid>

                    <Grid item sm={12} md={3}>
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

                    <Grid item sm={12} md={3}>
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
        </>
    );
};

export default TaskContainer;