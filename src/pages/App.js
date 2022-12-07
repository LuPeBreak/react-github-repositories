import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "../components/Button/index";
import Input from "../components/Input/index";
import ItemRepo from "../components/ItemRepo/index";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isInRepos = repos.find((repo) => repo.id === data.id);
      if (!isInRepos) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
      }
      return;
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (repoId) => {
    const newRepos = repos.filter((repo) => repo.id !== repoId);
    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={logo} width={72} height={72} alt="Logo do github" />
      <Input setCurrentRepo={setCurrentRepo} currentRepo={currentRepo} />
      <Button handleSearchRepo={handleSearchRepo} />
      {repos.map((repo) => {
        console.log(repo);
        return <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />;
      })}
    </Container>
  );
}

export default App;
