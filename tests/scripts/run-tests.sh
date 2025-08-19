#!/bin/bash

# Earth Zoom AI 测试运行脚本
# 用于执行不同类型的Playwright测试

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# 打印帮助信息
show_help() {
    echo "Earth Zoom AI 测试运行脚本"
    echo ""
    echo "用法: $0 [选项] [测试类型]"
    echo ""
    echo "测试类型:"
    echo "  all          - 运行所有测试 (默认)"
    echo "  unit         - 运行单元测试"
    echo "  integration  - 运行集成测试"
    echo "  e2e          - 运行端到端测试"
    echo "  visual       - 运行视觉回归测试"
    echo "  performance  - 运行性能测试"
    echo "  accessibility - 运行可访问性测试"
    echo "  seo          - 运行SEO测试"
    echo "  responsive   - 运行响应式测试"
    echo "  navigation   - 运行导航测试"
    echo "  homepage     - 运行首页测试"
    echo ""
    echo "选项:"
    echo "  -h, --help     - 显示此帮助信息"
    echo "  -d, --debug    - 启用调试模式"
    echo "  -v, --verbose  - 详细输出"
    echo "  -b, --browser  - 指定浏览器 (chromium|firefox|webkit)"
    echo "  -p, --project  - 指定项目配置"
    echo "  -r, --reporter - 指定报告器 (html|json|junit)"
    echo "  -w, --workers  - 指定并行工作进程数"
    echo "  --headed       - 有头模式运行"
    echo "  --ui           - 启用UI模式"
    echo "  --trace        - 启用追踪"
    echo "  --video        - 录制视频"
    echo "  --screenshot   - 截图模式"
    echo ""
    echo "示例:"
    echo "  $0 e2e --browser chromium --headed"
    echo "  $0 visual --trace --video"
    echo "  $0 all --workers 4 --reporter html"
}

# 检查依赖
check_dependencies() {
    print_message $BLUE "🔍 检查依赖..."
    
    if ! command -v npx &> /dev/null; then
        print_message $RED "❌ npx 未找到，请安装 Node.js"
        exit 1
    fi
    
    if ! npx playwright --version &> /dev/null; then
        print_message $RED "❌ Playwright 未找到，请运行: npm install @playwright/test"
        exit 1
    fi
    
    print_message $GREEN "✅ 依赖检查通过"
}

# 安装浏览器
install_browsers() {
    print_message $BLUE "🌐 检查浏览器安装..."
    
    if [ ! -d "$HOME/.cache/ms-playwright" ] || [ -z "$(ls -A $HOME/.cache/ms-playwright 2>/dev/null)" ]; then
        print_message $YELLOW "⬇️  安装Playwright浏览器..."
        npx playwright install
    else
        print_message $GREEN "✅ 浏览器已安装"
    fi
}

# 启动开发服务器
start_dev_server() {
    print_message $BLUE "🚀 检查开发服务器..."
    
    # 检查端口3000是否被占用
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        print_message $GREEN "✅ 开发服务器已运行在端口3000"
        return 0
    fi
    
    print_message $YELLOW "⚡ 启动开发服务器..."
    
    # 检查是否存在package.json
    if [ ! -f "package.json" ]; then
        print_message $RED "❌ 未找到package.json，请在项目根目录运行此脚本"
        exit 1
    fi
    
    # 启动开发服务器（后台运行）
    npm run dev > /dev/null 2>&1 &
    DEV_SERVER_PID=$!
    
    # 等待服务器启动
    print_message $BLUE "⏳ 等待服务器启动..."
    for i in {1..30}; do
        if curl -s http://localhost:3000 > /dev/null 2>&1; then
            print_message $GREEN "✅ 开发服务器启动成功"
            return 0
        fi
        sleep 2
    done
    
    print_message $RED "❌ 开发服务器启动超时"
    kill $DEV_SERVER_PID 2>/dev/null || true
    exit 1
}

# 运行测试
run_tests() {
    local test_type=$1
    local extra_args="${@:2}"
    
    print_message $BLUE "🧪 运行 ${test_type} 测试..."
    
    case $test_type in
        "all")
            npx playwright test $extra_args
            ;;
        "unit")
            npx playwright test tests/unit/ $extra_args
            ;;
        "integration")
            npx playwright test tests/integration/ $extra_args
            ;;
        "e2e")
            npx playwright test tests/e2e/ $extra_args
            ;;
        "visual")
            npx playwright test tests/visual-regression/ $extra_args
            ;;
        "performance")
            npx playwright test tests/performance/ $extra_args
            ;;
        "accessibility")
            npx playwright test tests/accessibility/ $extra_args
            ;;
        "seo")
            npx playwright test tests/seo/ $extra_args
            ;;
        "responsive")
            npx playwright test tests/responsive/ $extra_args
            ;;
        "navigation")
            npx playwright test tests/navigation/ $extra_args
            ;;
        "homepage")
            npx playwright test tests/homepage/ $extra_args
            ;;
        *)
            print_message $RED "❌ 未知的测试类型: $test_type"
            show_help
            exit 1
            ;;
    esac
}

# 生成测试报告
generate_report() {
    print_message $BLUE "📊 生成测试报告..."
    
    if [ -f "test-results/results.json" ]; then
        npx playwright show-report
        print_message $GREEN "✅ 测试报告已生成，浏览器将自动打开"
    else
        print_message $YELLOW "⚠️  未找到测试结果文件"
    fi
}

# 清理函数
cleanup() {
    if [ ! -z "$DEV_SERVER_PID" ]; then
        print_message $BLUE "🧹 清理开发服务器..."
        kill $DEV_SERVER_PID 2>/dev/null || true
    fi
}

# 设置清理陷阱
trap cleanup EXIT

# 主函数
main() {
    local test_type="all"
    local extra_args=""
    local debug=false
    local verbose=false
    local headed=false
    local ui=false
    local show_report=true
    
    # 解析命令行参数
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_help
                exit 0
                ;;
            -d|--debug)
                debug=true
                extra_args="$extra_args --debug"
                shift
                ;;
            -v|--verbose)
                verbose=true
                extra_args="$extra_args --verbose"
                shift
                ;;
            -b|--browser)
                extra_args="$extra_args --project=$2"
                shift 2
                ;;
            -p|--project)
                extra_args="$extra_args --project=$2"
                shift 2
                ;;
            -r|--reporter)
                extra_args="$extra_args --reporter=$2"
                shift 2
                ;;
            -w|--workers)
                extra_args="$extra_args --workers=$2"
                shift 2
                ;;
            --headed)
                headed=true
                extra_args="$extra_args --headed"
                shift
                ;;
            --ui)
                ui=true
                extra_args="$extra_args --ui"
                show_report=false
                shift
                ;;
            --trace)
                extra_args="$extra_args --trace=on"
                shift
                ;;
            --video)
                extra_args="$extra_args --video=on"
                shift
                ;;
            --screenshot)
                extra_args="$extra_args --screenshot=on"
                shift
                ;;
            all|unit|integration|e2e|visual|performance|accessibility|seo|responsive|navigation|homepage)
                test_type=$1
                shift
                ;;
            *)
                print_message $RED "❌ 未知选项: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    print_message $GREEN "🎯 Earth Zoom AI 测试运行器"
    print_message $BLUE "📋 测试类型: $test_type"
    
    if [ "$verbose" = true ]; then
        print_message $BLUE "🔧 额外参数: $extra_args"
    fi
    
    # 执行测试流程
    check_dependencies
    install_browsers
    
    if [ "$ui" = false ]; then
        start_dev_server
    fi
    
    # 运行测试
    if run_tests $test_type $extra_args; then
        print_message $GREEN "✅ 测试完成"
        
        if [ "$show_report" = true ] && [ "$ui" = false ]; then
            generate_report
        fi
    else
        print_message $RED "❌ 测试失败"
        exit 1
    fi
}

# 运行主函数
main "$@"