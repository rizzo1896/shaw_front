import UserCard from "../../components/userCard";
import { CircularProgress, Grid, Container, Pagination } from "@mui/material";
import { GitHubServices } from "../../services/gitHub.services";
import { useEffect, useState } from "react";
import { IUser } from "../../types/IGithub.types";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 0,
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination({ ...pagination, page: value });
  };

  const gitServices = new GitHubServices();

  const getUsers = async () => {
    const per_page = 100;
    setIsLoading(true);
    await gitServices
      .get({ since: 59455922, pagination: per_page })
      .then((res) => {
        setUsers(res);
        let count = parseInt((per_page / 10).toFixed(0));
        setPagination({
          ...pagination,
          totalPages: count,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function paginate({
    array,
    page_size,
    page_number,
  }: {
    array: IUser[];
    page_size: number;
    page_number: number;
  }) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Grid container spacing={2}>
        {isLoading ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress size={100} color={"error"} />
          </Container>
        ) : (
          <>
            {paginate({
              array: users,
              page_size: pagination.totalPages,
              page_number: pagination.page,
            }).map((el: IUser) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
                <UserCard login={el.login} id={el.id} key={el.id} />
              </Grid>
            ))}
          </>
        )}
      </Grid>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "30vh",
        }}
      >
        <Pagination
          count={pagination.totalPages}
          color="primary"
          page={pagination.page}
          onChange={handleChange}
        />
      </Container>
    </>
  );
}
