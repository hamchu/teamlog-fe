import { Button, Chip, Grid, Typography } from "@material-ui/core"
import { Error } from "@material-ui/icons"

const TaskContainer = () => {
    return (
        <>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography variant='h3'>태스크 목록</Typography>
                </Grid>

                <Grid item>
                    <Button variant='contained'>태스크 생성하기</Button>
                </Grid>

                <Grid item container spacing={2}>
                    <Grid item>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='시작 전' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>1</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='진행 중' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>1</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip label='완료' color='primary' />
                            </Grid>

                            <Grid item>
                                <Typography color='primary'>3</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Chip icon={<Error />} label='미완료' color='secondary' />
                            </Grid>

                            <Grid item>
                                <Typography color='secondary'>1</Typography>
                            </Grid>
                        </ Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default TaskContainer;