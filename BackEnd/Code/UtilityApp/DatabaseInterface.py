import boto3
import pickle

class DynamoDbInterface:

    def __init__(self):
        pass
    
    def get(self,**kwargs):
        pass
    
    def save(self, document):
        pass


class FileDbInterface:

    db_path = "./db.pickle"
    db_data = None

    def __init__(self):
        try:
            file = open(self.db_path,'rb')
            self.db_data = pickle.load(file)
            file.close()
        except FileNotFoundError:
            print(">>>>>>>>>>>>>> Db file not found , creating blank in-memory db.")
            self.db_data = dict()
    
    def get(self,id):
        return self.db_data[id]
    
    def all(self):
        print("in T2 >>>")
        return list(self.db_data.values())
    
    def save(self,id,document):
        self.db_data[id] = document
        self.__store_data_to_store()
        return 200
    
    def __store_data_to_store(self):
        print(">> Storing data to sotre ...")
        file = open(self.db_path,'wb')
        pickle.dump(self.db_data,file)
        file.close()

    
    def __del__(self):
        print(">>> Deconstructing : serializing data")
        print(self.db_data)
        file = open(self.db_path,'wb')
        pickle.dump(self.db_data,file)
        file.close()