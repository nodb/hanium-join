import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDataFromStorage } from "../../../utils/storage";
import { useAssignments } from "../../../components/Use";

const useSubmit = () => {
  const history = useHistory();
  const { id, code } = useParams();
  const { submitAssignmentsApi } = useAssignments();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  const [data, setData] = useState({
    contents: "",
    file: "",
  });

  const submitHandler = async () => {
    try {
      const studentInfo = getDataFromStorage();
      const memberId = studentInfo.id;
      const fd = new FormData();
      console.log("err");
      if (imgFile) {
        Object.values(imgFile).forEach((file) => fd.append("file", file));
      }
      console.log("err");
      fd.append("contents", data.contents);
      const response = await submitAssignmentsApi(id, memberId, fd);

      if (response.data) {
        history.push("/student/class/");
      }
    } catch (e) {
      // alert("과제 제출 실패");
      alert(e);
    }
  };

  const backHandler = async () => {
    history.push(`/student/class/${code}/main/assignment/${id}`)
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeFile = (e) => {
    // console.log(e.target.files)
    setImgFile(e.target.files);
    //fd.append("file", e.target.files)
    setImgBase64([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            //  images.push(base64.toString())
            const base64Sub = {
              name: e.target.files[i].name,
              file: base64.toString(),
            };

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
    console.log(imgBase64);
  };

  const deleteHandler = (e) => {
    const arr = imgBase64.filter((element) => element.name !== e.target.name);
    setImgBase64(arr);
  };

  return {
    data,
    imgBase64,
    submitHandler,
    handleChange,
    handleChangeFile,
    deleteHandler,
    backHandler,
  };
};

export default useSubmit;
