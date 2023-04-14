import { useContext, useState } from "react";
import Books from "../../components/books/Books";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/types";
import Share from "../../components/share/Share";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../utils/request";

const Home = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [addBook, setAddBook] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (titulo: string) => {
      return request.get(`books/${titulo}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["book"]);
        console.log("succes")
      },
    }
  );

  return (
    <div>
      <div className="bg-gray-100 w-full h-20"></div>


      {addBook && <Share setAddBook={setAddBook} />}
      <Books />
    </div>
  );
};

export default Home;
