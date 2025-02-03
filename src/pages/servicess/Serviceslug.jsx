import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Serviceslug() {
  const params = useParams();
  console.log(params.slug);
  const [service, setService] = useState([]);
  async function serviceslug() {
    try {
      const responseofservice = await fetch(
        "https://itbridge.com.np/api/service"
      );
      const dataofservice = await responseofservice.json();
      setService(dataofservice.data);
      console.log(dataofservice.data);
    } catch (error) {
      console.log(error);
    }
  }
  const filterdatas = service.filter((item) => item.slug === params.slug);

  const fp = filterdatas[0];
  console.log(fp);

  useEffect(() => {
    serviceslug();
  }, []);
  if (filterdatas.length === 0) {
    return <div>uer</div>;
  }
  return (
    <div className="w-full justify-center items-center mt-20 bg-amber-50">
      <div className="max-w-6xl mx-auto"></div>
    </div>
  );
}

export default Serviceslug;
