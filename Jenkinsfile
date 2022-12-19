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
                npm i && npm run build
            }
        }
    }
}
