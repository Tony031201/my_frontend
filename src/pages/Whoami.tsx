import  { useEffect, useState } from 'react';
import { Whoami } from '../services/whoami';

const WhoamiPage = () => {
    const [data, setData] = useState("");

    useEffect(()=>{
        async function who() {
            try{
                const response = await Whoami();
                setData(response.username);
            }catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        who();
    },[])

    return (
        <div>
          <h1>whoami page</h1>
            <h2>{data}</h2>
        </div>
      );
};

export default WhoamiPage;