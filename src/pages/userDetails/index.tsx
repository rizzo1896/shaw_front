import { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { GitHubServices } from "../../services/gitHub.services";
import { IRepo, IUser } from "../../types/IGithub.types";
import DataTable from "../../components/table";
import { formatDate } from "../../util/date";

export default function UserDetails() {
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [loading, setLoading] = useState({
    user: false,
    repos: false,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const githubservices = new GitHubServices();

  const getUser = async () => {
    setLoading({ ...loading, user: true });
    const response = await githubservices.getUser(id!).finally(() => {
      setLoading({ ...loading, user: false });
    });
    setUser(response);
  };

  const getRepos = async () => {
    const response = await githubservices.getRepos(id!).finally(() => {
      setLoading({ ...loading, repos: false });
    });
    setRepos(response);
  };

  useEffect(() => {
    getUser();
    getRepos();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            marginTop: 4,
          }}
        >
          User Details
        </Typography>

        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </Container>

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
        }}
      >
        <Container sx={{}}>
          <Typography gutterBottom variant="h5" component="div">
            {user?.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {user?.id}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            URL: {user?.html_url}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Created At:{" "}
            {user !== null && formatDate(user?.created_at, "DD/MM/YYYY")}
          </Typography>
        </Container>

        <Container
          maxWidth="xl"
          sx={{
            marginLeft: 2,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Repositories
          </Typography>

          {!loading.repos ? (
            repos.length > 0 ? (
              <DataTable data={repos} />
            ) : (
              <Typography variant="body2" color="text.secondary">
                No repositories found
              </Typography>
            )
          ) : (
            <Typography variant="body2" color="text.secondary">
              Loading...
            </Typography>
          )}
        </Container>
      </Container>
    </>
  );
}
