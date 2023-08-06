import { useEffect, useState } from "react";
import { useApp } from "./useApp";

export default function useDataList(dataType: string) {
	const mongodbApp = useApp()
	const [dataList, setDataList] = useState<any[]>()
	useEffect(() => {
		const mongoClient = mongodbApp.currentUser?.mongoClient('mongodb-atlas');
    //@ts-ignore TODO fix the user problem
		const mongoCollection = mongoClient.db('qrcodeTraceability').collection(dataType);
		(async () => {
		  const results= await mongoCollection.find()
		  setDataList(results)
		})()
	}, [])
	return dataList
}