# mytest

1. test-changeで変更します。

1. VSCodeのFile->Open Folderから、新しいフォルダーを作ってそこを指定する。  

1. package.jsonを作る。  
	Ctrl+@ コンソール（bash）を開いて  
	```
	$ nmp init
	```  
	いろいろ聞かれるが、とりあえず全てエンター  

1. 公開するフォルダを作成する。  
	bin フォルダーを作成する。  

1. package.jsonに公開フォルダーの定義を追加する。  
	directories/binフィールドを追加して、binフォルダを指定する。  

	例）

	```
	"directories": {
		"bin": "bin"
	},
	```  

1. nodeプログラムを作る。  
	先頭にnode用のシェルバン行を付けておく

1. 暫定公開する。  
	Ctrl+@ コンソール（bash）を開いて  
	```
	$ nmp link
	```  
	これで一時的にパスの通ったプログラムが設定できる。
