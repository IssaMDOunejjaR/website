pipeline {
    agent any

    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:16.13.1-alpine'
                }
            }

            steps {
                sh 'npm i && npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose stop
                    docker compose rm 
                    docker compose up -d
                '''
            }
        }
    }
}
