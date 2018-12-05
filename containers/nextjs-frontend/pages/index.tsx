import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";

function styles(theme: Theme) {
    return createStyles({
        root: {
            paddingTop: theme.spacing.unit * 20
        }
    });
}

interface IProps {
    children?: React.ReactNode;
    fortune: string;
}

interface IState {
    openDialog: boolean;
    fortune: string;
}

class Index extends React.Component<
    IProps & WithStyles<typeof styles>,
    IState
> {
    public static async getInitialProps({ req }: { req: any }) {
        const isServer = Boolean(req);
        const url = isServer
            ? "http://java-api-server:8081/api/fortune"
            : "/api/fortune";
        const res = await fetch(url);
        if (res.ok) {
            const { result } = await res.json();
            return { fortune: result };
        }
        return { fortune: "fetch error" };
    }

    constructor(props: IProps & WithStyles<typeof styles>) {
        super(props);
        this.state = {
            openDialog: false,
            fortune: props.fortune
        };
    }

    public handleCloseDialog = async () => {
        const res = await fetch("/api/fortune");
        let fortune = "";
        if (res.ok) {
            const { result } = await res.json();
            fortune = result;
        }

        this.setState({
            openDialog: false,
            fortune
        });
    };

    public handleClickShowDialog = () => {
        this.setState({
            openDialog: true
        });
    };

    public render() {
        const { classes } = this.props;
        const { openDialog, fortune } = this.state;

        return (
            <div className={classes.root}>
                <Dialog open={openDialog} onClose={this.handleCloseDialog}>
                    <DialogTitle>Dialog Sample</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Today's fortune: {fortune}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            onClick={this.handleCloseDialog}
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleClickShowDialog}
                >
                    Shot Dialog
                </Button>
                <style jsx={true}>{`
                    .root {
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
