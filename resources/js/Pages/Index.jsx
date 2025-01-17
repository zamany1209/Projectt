import React, { useContext,useEffect } from 'react';
import Loading from '@/Components/Loading';
import { DataProvider,DataContext } from '@/Context/DataContext';
import MyContextMenu from '@/Components/MyContextMenu';
import Management_Modal from '@/Components/Management_Modal';
import Save_changes from '@/Components/Save_changes';
import Check_visit from '@/Components/Check_visit';

function Constructor({ name , re_url , re_data,re_data_search, re_token, re_image_list,re_component_img,re_component }){
    const { data,setPage_name,setData, setToken,setUrl, setState_admin, setEdit_text, setImage_list,add_Modal,setComponent_list_img,setComponent_list, data_search } = useContext(DataContext);
    var components =  JSON.parse(re_data);
    components["data_search"] = re_data_search;
    useEffect(() => {
        if(name == " landing" || name == " Search" || name == " 404"){
            document.title = data.title;
        }
        else{
            document.title = re_data_search.name;
        }

        setData(components);
        setPage_name(name);
        setUrl(re_url);
        if(re_token){
            setImage_list(JSON.parse(re_image_list));
            setToken(re_token);
            setState_admin(true);
            setEdit_text('true');
            setComponent_list_img(JSON.parse(re_component_img));
            setComponent_list(JSON.parse(re_component));
        }
    }, []);
    if(name == " landing" || name == " Search" || name == " 404"){
        useEffect(() => {
            document.title = data.title;
        }, [data.title]);
    }
    else{
        // useEffect(() => {
        //     document.title = data.data_search.name;
        // }, [data.data_search.name]);
    }
    return(
        <>
        {/* {components.components.map((component, index) =>
                <Loading key={component.name}  url={component.name} index_Components={index} name_Components={component.name} folder="UI"/>

        )} */}
        <Loading folder="UI"/>
        </>
    )
}

export default function Index({ name ,re_url,re_data,re_data_search ,re_token, re_image_list,re_component_img,re_component }) {
    return (
        <>
            <DataProvider>
                <Constructor name={name} re_data={re_data} re_url={re_url} re_token={re_token} re_image_list={re_image_list} re_component_img={re_component_img} re_component={re_component} re_data_search={re_data_search} />
                {re_token ? (
                    <div>
                        <MyContextMenu name={name}></MyContextMenu>
                        <Management_Modal name={name}></Management_Modal>
                        <Save_changes name={name} re_url={re_url}></Save_changes>
                    </div>
                ):(
                    <Check_visit re_url={re_url} name={name}></Check_visit>
                )}
            </DataProvider>
        </>
    );
}
